import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import PokemonStats from './PokemonStats';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const TabsExampleSimple = ({data}) => (
  <Tabs>
    <Tab label="Stats" >
        <PokemonStats pokemons={data} />
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;