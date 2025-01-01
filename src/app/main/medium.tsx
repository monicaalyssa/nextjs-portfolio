import { useMantineColorScheme } from "@mantine/core";

export default function MediumIcon() {
  const theme = useMantineColorScheme();

  return (
    <svg
      aria-label="Medium Blog Logo"
      style={{ top: 2, position: "relative" }}
      fill={theme.colorScheme === "dark" ? "#fff" : "#000"}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="21"
      height="21"
      viewBox="0 0 24 24"
    >
      <path d="M 16.259766 3.75 C 16.255769 3.7502197 16.252035 3.7516695 16.248047 3.7519531 L 16.226562 3.7539062 L 16.189453 3.7578125 L 16.152344 3.765625 L 16.115234 3.7734375 L 16.080078 3.7832031 L 16.044922 3.7949219 L 16.011719 3.8085938 L 15.988281 3.8183594 C 15.98584 3.8194763 15.982898 3.8191696 15.980469 3.8203125 L 15.978516 3.8222656 C 15.978516 3.8222656 15.976562 3.8242188 15.976562 3.8242188 L 15.945312 3.8398438 L 15.914062 3.8574219 L 15.884766 3.8769531 L 15.853516 3.8964844 L 15.826172 3.9199219 L 15.798828 3.9433594 L 15.771484 3.9667969 L 15.746094 3.9921875 L 15.724609 4.0195312 L 15.701172 4.0488281 L 15.679688 4.078125 L 15.660156 4.1074219 L 15.642578 4.140625 L 15.626953 4.171875 L 15.609375 4.2050781 L 15.597656 4.2382812 L 15.595703 4.2421875 C 15.595182 4.2436032 15.594264 4.244673 15.59375 4.2460938 L 12.585938 12.601562 L 8.3691406 4.1894531 C 8.2421406 3.9354531 7.9832188 3.7753906 7.6992188 3.7753906 L 2.6992188 3.7753906 C 2.3952188 3.7753906 2.1218594 3.9592344 2.0058594 4.2402344 C 1.8908594 4.5222344 1.9578281 4.8445938 2.1738281 5.0585938 L 3.9492188 6.8125 L 3.9492188 16.228516 L 1.6230469 19.019531 C 1.4370469 19.242531 1.3974844 19.555359 1.5214844 19.818359 C 1.6444844 20.082359 1.9082188 20.25 2.1992188 20.25 L 7.1992188 20.25 C 7.4902188 20.25 7.7559062 20.082359 7.8789062 19.818359 C 8.0029062 19.555359 7.9613906 19.242531 7.7753906 19.019531 L 5.4492188 16.228516 L 5.4492188 9.9121094 L 10.019531 19.814453 C 10.145531 20.086453 10.41975 20.258 10.71875 20.25 C 11.01875 20.242 11.285484 20.057297 11.396484 19.779297 L 13.396484 14.779297 C 13.398238 14.774914 13.39677 14.770029 13.398438 14.765625 C 13.400177 14.761086 13.40459 14.758498 13.40625 14.753906 L 15.550781 8.796875 L 15.550781 17.189453 L 13.769531 18.970703 C 13.554531 19.184703 13.491422 19.507109 13.607422 19.787109 C 13.723422 20.067109 13.997781 20.25 14.300781 20.25 L 21.800781 20.25 C 22.084781 20.25 22.343703 20.089937 22.470703 19.835938 C 22.597703 19.581937 22.570391 19.277781 22.400391 19.050781 L 21.050781 17.25 L 21.050781 6.7539062 L 22.396484 4.9785156 C 22.568484 4.7525156 22.597656 4.4483594 22.472656 4.1933594 C 22.346656 3.9393594 22.087734 3.7773906 21.802734 3.7753906 L 16.302734 3.75 L 16.271484 3.7519531 C 16.267605 3.7521056 16.263637 3.7497872 16.259766 3.75 z M 4.5273438 5.2753906 L 7.2363281 5.2753906 L 11.878906 14.535156 L 10.650391 17.603516 L 5.390625 6.2089844 L 5.3808594 6.1855469 C 5.349628 6.1181528 5.3029409 6.0613354 5.2539062 6.0058594 C 5.2438859 5.9945227 5.2392236 5.9795331 5.2285156 5.96875 C 5.2278743 5.9681132 5.2272061 5.9674313 5.2265625 5.9667969 L 4.5273438 5.2753906 z M 4.6992188 17.671875 L 5.5996094 18.75 L 3.8007812 18.75 L 4.6992188 17.671875 z"></path>
    </svg>
  );
}
