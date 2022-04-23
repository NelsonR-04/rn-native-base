import { StyleSheet, ViewStyle } from 'react-native';

interface FlexboxStyle {
  [key: string]: ViewStyle;
}

const FLEX_DIRECTION_OPTIONS = ['row', 'column'];

const JUSTIFY_CONTENT_OPTIONS = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];

const ALIGN_ITEMS_OPTIONS = [
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'baseline',
];

const TEXT_ALIGN_OPTIONS = ['auto', 'left', 'right', 'center', 'justify'];

const GAP_OPTIONS = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48];

const buildGaps = () => {
  let gaps = {};

  GAP_OPTIONS.forEach(gap => {
    gaps = {
      ...gaps,
      [`columnGap${gap}`]: { marginTop: gap },
      [`rowGap${gap}`]: { marginStart: gap },
      [`marginTop${gap}`]: { marginTop: gap },
      [`marginBottom${gap}`]: { marginBottom: gap },
      [`marginHorizontal${gap}`]: { marginHorizontal: gap },
      [`marginVertical${gap}`]: { marginVertical: gap },
      [`paddingHorizontal${gap}`]: { paddingHorizontal: gap },
      [`paddingVertical${gap}`]: { paddingVertical: gap },
    };
  });

  return gaps;
};

const buildFlexDirection = () => {
  let directions = {};

  FLEX_DIRECTION_OPTIONS.forEach(direction => {
    directions = {
      ...directions,
      [direction]: {
        flexDirection: direction,
      },
    };
  });

  return directions;
};

const buildJustifyContent = () => {
  let justifycontents = {};

  JUSTIFY_CONTENT_OPTIONS.forEach(justify => {
    justifycontents = {
      ...justifycontents,
      [justify]: {
        justifyContent: justify,
      },
    };
  });

  return justifycontents;
};

const buildAlignItems = () => {
  let itemsAlignments = {};

  ALIGN_ITEMS_OPTIONS.forEach(alignItems => {
    itemsAlignments = {
      ...itemsAlignments,
      [`alignItems${alignItems}`]: {
        alignItems: alignItems,
      },
    };
  });

  return itemsAlignments;
};

const buildTextAlign = () => {
  let textAlignment = {};

  TEXT_ALIGN_OPTIONS.forEach(textAlign => {
    textAlignment = {
      ...textAlignment,
      textAlign: {
        textAlign: textAlign,
      },
    };
  });

  return textAlignment;
};

export default StyleSheet.create({
  ...buildGaps(),
  ...buildFlexDirection(),
  ...buildJustifyContent(),
  ...buildAlignItems(),
  ...buildTextAlign(),
  wrapper: {
    width: '100%',
  },
}) as FlexboxStyle;
