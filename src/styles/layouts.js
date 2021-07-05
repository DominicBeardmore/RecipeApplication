export const VerticalContainer = {
  flex: 1,
  flexDirection: 'column',
};

export const Image = {

};

export const SidePadding = {
  paddingLeft: 10,
  paddingRight: 10,
};

export const BoxPadding = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 5,
  paddingBottom: 5,
};

export const BigBoxPadding = {
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  paddingBottom: 5,
};

export const StickToBottom = {
  justifyContent: 'center',
};

export const BorderBottom = {
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
};

export const BorderTop = {
  borderTopColor: 'grey',
  borderTopWidth: 1,
};

export const BorderRight = {
  borderRightColor: 'grey',
  borderRightWidth: 1,
};

export const BorderLeft = {
  borderLeftColor: 'grey',
  borderLeftWidth: 1,
};

export const BoxBorder = {
  ...BorderBottom,
  ...BorderLeft,
  ...BorderRight,
  ...BorderTop,
};

export const TopMargin = {
  marginTop: 10,
};

export const BottomMargin = {
  marginBottom: 10,
};

export const MarginHorizontal = {
  marginHorizontal: 10
};

export const RoundedEdges = {
  ...BottomRoundedEdges,
  ...TopRoundedEdges
};

export const BottomRoundedEdges = {
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
};

export const TopRoundedEdges = {
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
};
