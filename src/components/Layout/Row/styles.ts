import { StyleSheet, ViewStyle } from 'react-native';

interface RowStyle {
  [key: string]: ViewStyle;
}

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

const GAP_OPTIONS = [4, 8, 12, 16, 20, 24, 32, 40, 48];

const buildGaps = () => {
  let gaps = {};

  GAP_OPTIONS.forEach(gap => {
    gaps = {
      ...gaps,
      [`rowGap${gap}`]: { marginStart: gap },
      [`paddingHorizontal${gap}`]: { paddingHorizontal: gap },
      [`paddingVertical${gap}`]: { paddingVertical: gap },
    };
  });

  return gaps;
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
        alignItems,
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
      [`textAlign${textAlign}`]: {
        textAlign,
      },
    };
  });

  return textAlignment;
};

export default StyleSheet.create({
  ...buildGaps(),
  ...buildJustifyContent(),
  ...buildAlignItems(),
  ...buildTextAlign(),
  wrapper: {
    flexDirection: 'row',
    width: '100%',
  },
}) as RowStyle;
