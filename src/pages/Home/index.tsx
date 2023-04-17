import { Banner } from './Banner';
import { CoffeeList } from './CoffeeList';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList />
    </HomeContainer>
  );
}
