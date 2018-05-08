package com.reactnativenavigation.viewcontrollers;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.app.Activity;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.reactnativenavigation.anim.ModalAnimator;
import com.reactnativenavigation.anim.NavigationAnimator;
import com.reactnativenavigation.parse.Options;
import com.reactnativenavigation.presentation.NavigationOptionsListener;
import com.reactnativenavigation.presentation.OverlayManager;
import com.reactnativenavigation.react.JsDevReloadHandler;
import com.reactnativenavigation.utils.CommandListener;
import com.reactnativenavigation.utils.CommandListenerAdapter;
import com.reactnativenavigation.utils.CompatUtils;
import com.reactnativenavigation.utils.NativeCommandListener;
import com.reactnativenavigation.viewcontrollers.modal.ModalPresenter;
import com.reactnativenavigation.viewcontrollers.modal.ModalStack;

import java.util.Collection;
import java.util.Collections;

public class Navigator extends ParentController implements JsDevReloadHandler.ReloadListener {

    private final ModalStack modalStack;
    private ViewController root;
    private FrameLayout rootLayout;
    private FrameLayout contentLayout;
    private final OverlayManager overlayManager;
    private Options defaultOptions = new Options();

    public Navigator(final Activity activity, OverlayManager overlayManager) {
        super(activity, "navigator" + CompatUtils.generateViewId(), new Options());
        modalStack = new ModalStack(new ModalPresenter(new ModalAnimator(activity)));
        this.overlayManager = overlayManager;
    }

    public FrameLayout getContentLayout() {
        return contentLayout;
    }

    @NonNull
    @Override
    protected ViewGroup createView() {
        rootLayout = new FrameLayout(getActivity());
        contentLayout = new FrameLayout(getActivity());
        rootLayout.addView(contentLayout);
        modalStack.setContentLayout(contentLayout);
        return rootLayout;
    }

    @NonNull
    @Override
    public Collection<ViewController> getChildControllers() {
        return root == null ? Collections.emptyList() : Collections.singletonList(root);
    }

    @Override
    public boolean handleBack(CommandListener listener) {
        if (modalStack.isEmpty()) return root.handleBack(listener);
        return modalStack.handleBack(listener, root);
    }

    @Override
    public void onReload() {
        destroyViews();
    }

    @Override
    public void destroy() {
        destroyViews();
        super.destroy();
    }

    private void destroyViews() {
        destroyRoot();
        overlayManager.destroy();
        modalStack.dismissAllModals(new CommandListenerAdapter(), root);
    }

    private void destroyRoot() {
        if (root != null) root.destroy();
        root = null;
    }

    @Override
    public void sendOnNavigationButtonPressed(String buttonId) {

    }

    public void setRoot(final ViewController viewController, CommandListener commandListener) {
        destroyRoot();
        root = viewController;
        contentLayout.addView(viewController.getView());
        if (viewController.options.animations.startApp.hasValue()) {
            new NavigationAnimator(viewController.getActivity(), viewController.options.animations)
                    .animateStartApp(viewController.getView(), new AnimatorListenerAdapter() {
                        @Override
                        public void onAnimationEnd(Animator animation) {
                            commandListener.onSuccess(viewController.getId());
                        }
                    });
        } else {
            commandListener.onSuccess(viewController.getId());
        }
    }

    public void setDefaultOptions(Options defaultOptions) {
        this.defaultOptions = defaultOptions;
    }

    public Options getDefaultOptions() {
        return defaultOptions;
    }

    public void mergeOptions(final String componentId, Options options) {
        ViewController target = findControllerById(componentId);
        if (target instanceof NavigationOptionsListener) {
            ((NavigationOptionsListener) target).mergeOptions(options);
        }
        if (root instanceof NavigationOptionsListener) {
            ((NavigationOptionsListener) root).mergeOptions(options);
        }
    }

    public void push(final String fromId, final ViewController viewController, CommandListener listener) {
        ViewController from = findControllerById(fromId);
        if (from != null) {
            from.performOnParentStack(stack -> ((StackController) stack).push(viewController, listener));
        } else {
            listener.onError("Could not push component: " +
                             viewController.getId() +
                             ". Stack with id " +
                             fromId +
                             " was not found.");
        }
    }

    public void setStackRoot(String fromId, ViewController viewController, CommandListener listener) {
        ViewController from = findControllerById(fromId);
        if (from != null) {
            from.performOnParentStack(stack -> ((StackController) stack).setRoot(viewController, listener));
        }
    }

    public void pop(final String fromId, CommandListener listener) {
        ViewController from = findControllerById(fromId);
        if (from != null) {
            from.performOnParentStack(stack -> ((StackController) stack).pop(listener));
        }
    }

    public void popSpecific(final String id, CommandListener listener) {
        ViewController from = findControllerById(id);
        if (from != null) {
            from.performOnParentStack(stack -> ((StackController) stack).popSpecific(from, listener), () -> listener.onError("Nothing to pop"));
        } else {
            listener.onError("Nothing to pop");
        }
    }

    public void popToRoot(final String id, CommandListener listener) {
        ViewController from = findControllerById(id);
        if (from != null) {
            from.performOnParentStack(stack -> ((StackController) stack).popToRoot(listener));
        }
    }

    public void popTo(final String componentId, CommandListener listener) {
        ViewController target = findControllerById(componentId);
        if (target != null) {
            target.performOnParentStack(stack -> ((StackController) stack).popTo(target, listener), () -> listener.onError("Nothing to pop"));
        } else {
            listener.onError("Nothing to pop");
        }
    }

    public void showModal(final ViewController viewController, CommandListener listener) {
        modalStack.showModal(viewController, root, listener);
    }

    public void dismissModal(final String componentId, CommandListener listener) {
        modalStack.dismissModal(componentId, root, listener);
    }

    public void dismissAllModals(CommandListener listener) {
        modalStack.dismissAllModals(listener, root);
    }

    public void showOverlay(ViewController overlay, NativeCommandListener listener) {
        overlayManager.show(rootLayout, overlay, listener);
    }

    public void dismissOverlay(final String componentId, CommandListener listener) {
        overlayManager.dismiss(getView(), componentId, listener);
    }

    @Nullable
    @Override
    public ViewController findControllerById(String id) {
        ViewController controllerById = super.findControllerById(id);
        return controllerById != null ? controllerById : modalStack.findControllerById(id);
    }
}