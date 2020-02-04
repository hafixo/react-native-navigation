package com.reactnativenavigation.views.element.animators

import android.animation.Animator
import android.animation.ObjectAnimator
import android.view.View
import android.view.View.TRANSLATION_Y
import android.view.ViewGroup
import com.facebook.react.views.text.ReactTextView
import com.reactnativenavigation.parse.SharedElementTransitionOptions
import com.reactnativenavigation.utils.ViewUtils
import com.reactnativenavigation.views.element.SharedElementTransition

class YAnimator(transition: SharedElementTransition, from: View, to: View) : PropertyAnimatorCreator<View>(from, to) {
    private val dy: Int

    init {
        val fromXy = ViewUtils.getLocationOnScreen(from)
        val toY = (to.layoutParams as ViewGroup.MarginLayoutParams).topMargin
        dy = fromXy.y - toY + transition.topInsetDelta
        to.pivotY = 0f
    }

    override fun shouldAnimateProperty(fromChild: View, toChild: View) = dy != 0

    override fun excludedViews() = listOf(ReactTextView::class.java)

    override fun create(options: SharedElementTransitionOptions): Animator {
        return ObjectAnimator.ofFloat(to, TRANSLATION_Y, dy.toFloat(), 0f).setDuration(options.getDuration())
    }
}