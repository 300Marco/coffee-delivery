import { Banner } from './Banner';
import { CoffeeList } from './CoffeeList';

import {
  HomeContainer,
  // BannerContainer,
  // BannerContent,
  // BannerInformation,
  // BannerCoffee,
  // ItemInformation,
  // ItemIcon,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList />
    </HomeContainer>
  );
}
