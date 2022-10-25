import { View, Text, Image, DevSettings } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const ImageCmp = ({ source, index }) => {
  return (
    <Image
      source={source}
      resizeMode="contain"
      style={{
        width: 40,
        height: 40,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const NFTTitle = ({ title, titleSize, subTitle, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20 }}
      />
      <Text>{price}</Text>
    </View>
  );
};

export const People = ({}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person01, assets.person03, assets.person04].map(
        (imgUrl, i) => (
          <ImageCmp source={imgUrl} index={i} />
        )
      )}
    </View>
  );
};

export const EndDate = ({}) => {
  return (
    <View
      style={{
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.font,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending In
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h, 30m
      </Text>
    </View>
  );
};

export const SubInfo = ({}) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
