import { Avatar, AvatarProps, forwardRef } from "@chakra-ui/react";

export const AvatarButton = forwardRef<AvatarProps, "span">((props, ref) => {
  return (
    <Avatar
      ref={ref}
      src=""
      name=""
      cursor="pointer"
      transition="0.3s"
      _hover={{ filter: "brightness( 0.8 )" }}
      {...props}
    />
  );
});
