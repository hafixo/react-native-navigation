import React from 'react';
import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';
import { KeyboardAwareInsetsView } from 'react-native-keyboard-tracking-view';
import flags from '../flags';
import colors from '../commons/Colors';

const { showTextInputToTestKeyboardInteraction } = flags;

type RootProps = {
  componentId?: string;
  style?: StyleProp<ViewStyle>;
  footer?: string;
  testID?: string;
  children?: React.ReactNode;
  onLayout?: (event: LayoutChangeEvent) => void;
  nativeID?: string;
};

const Root = ({ children, componentId, footer, style, testID, onLayout, nativeID }: RootProps) => (
  <SafeAreaView style={styles.root} testID={testID} onLayout={onLayout} nativeID={nativeID}>
    <ScrollView contentContainerStyle={[styles.scrollView, style]}>
      {children}
      <Footer componentId={componentId} footer={footer} />
    </ScrollView>
    {showTextInputToTestKeyboardInteraction && <KeyboardAwareInsetsView />}
  </SafeAreaView>
);

type FooterProps = Pick<RootProps, 'componentId' | 'footer'>;

const Footer: React.FC<FooterProps> = ({ componentId, footer }) => {
  if (!componentId) {
    return null;
  }

  return (
    <View style={styles.footer}>
      {/* Rendering TextInput for a test. */}
      {showTextInputToTestKeyboardInteraction && (
        <TextInput placeholder="Input" style={styles.testInput} />
      )}

      {/* Rendering Footer. */}
      {footer && <Text style={styles.footerText}>{footer}</Text>}

      {/* Rendering component id. */}
      <Text style={styles.footerText}>{`this.props.componentId = ${componentId}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  testInput: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 100,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#888',
    marginTop: 10,
  },
});

export default Root;