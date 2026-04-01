import { useEffect } from "react";
import { useCardContext } from "../providers/CardProvider"
import { Flex, Card, CardHeader, CardBody, Heading, Image, Stack, Divider } from '@chakra-ui/react'




    const MealsList = [
 
    {
        id: 1,
        meal: "Fish with polenta",
        img: require('../assets/Fish_Dish.jpg'),
    },
        {
        id: 2,
        meal: "Grilled vegetables",
        img: require('../assets/Grilled_Vegetables.jpg')
    },
    {
        id: 3,
        meal: "Quiche",
        img: require('../assets/Quiche.jpg')
    }
]



const MealCard = () => {

   
    const {meals, setMeals} = useCardContext();

    useEffect(() => setMeals(MealsList), [setMeals])
    
    return (
        <>
        <Heading m='2em'>Today's Meal</Heading>
        
        {/* ? Prevents React from crashing if our context hasn’t loaded yet */}
        
        {meals?.map((meal) => (
            <div  key={meal.id}>
            <Flex direction='column' align='center'>
            <Card maxW='lg' margin='1em' boxShadow='lg' p='6' bg='white' _hover={{
                boxShadow: 'dark-lg',
                transition: '0.2s ease-in'
            }}>
            <CardBody>

            <CardHeader>
            <Heading size='md'>{meal.meal}</Heading>
            </CardHeader >
            <Divider />

            <Stack mt='6' spacing='3'>
            <Image src={meal.img} alt={meal.meal} h='auto' w='auto' borderRadius='lg'/>
            </Stack>

            </CardBody>
            </Card>
            </Flex>
       </div>
       ))}
        </>
    )

}

export default MealCard;