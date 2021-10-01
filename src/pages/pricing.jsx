import flagsmith from 'flagsmith/isomorphic';
import React from 'react';

import PricingV1 from 'components/pages/pricing-v-1';
import PricingV2 from 'components/pages/pricing-v-2';
import MainLayout from 'layouts/main';

const PricingPage = ({ serverData }) => (
  <MainLayout>
    {console.log(serverData)}
    <PricingV2 />
  </MainLayout>
);

export default PricingPage;

export async function getServerData() {
  try {
    await flagsmith.init({
      environmentID: process.env.GATSBY_FLAGSMITH_API_KEY,
    });
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: pricingV,
    };
  } catch (error) {
    return {
      headers: {
        status: 500,
      },
      props: {},
    };
  }
}
