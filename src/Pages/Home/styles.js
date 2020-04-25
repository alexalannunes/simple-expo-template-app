import styled from "styled-components/native";
import colors from "../../../constants/colors";

const scrollViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
};

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: scrollViewStyle,
  showsVerticalScrollIndicator: false,
})`
  background: ${colors.white};
`;

export const Button = styled.Text`
  color: ${colors.primary};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${colors.primary};
  padding: 10px 20px;
`;

export const ButtonText = styled.Text`
  color: ${colors.primary};
  font-family: Roboto-Bold;
  font-size: 20px;
`;
