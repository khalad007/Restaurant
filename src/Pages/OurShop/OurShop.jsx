import { useState } from "react";
import ourShopImg from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import OurShopCard from "./OurShopCard";

const OurShop = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover img={ourShopImg} title="Our Shop"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            salad.map(items => <OurShopCard
                                key={items._id}
                                items={items}
                            ></OurShopCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            pizza.map(items => <OurShopCard
                                key={items._id}
                                items={items}
                            ></OurShopCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            soup.map(items => <OurShopCard
                                key={items._id}
                                items={items}
                            ></OurShopCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            desserts.map(items => <OurShopCard
                                key={items._id}
                                items={items}
                            ></OurShopCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            drinks.map(items => <OurShopCard
                                key={items._id}
                                items={items}
                            ></OurShopCard>)
                        }
                    </div>

                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default OurShop;