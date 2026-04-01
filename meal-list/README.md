# meal-list

## About
This is a simple `useContext` API project featuring a list of meals displayed in a column.

## Project Features:
 - `Map()` function for the assigned object iteration.
 
 **MealCard.jsx**
 
 ```{meals?.map((meal) => ( <div  key={meal.id}>...```

 - ChakraUI styling.

 **MealCard.jsx**

`import { Flex, Card, CardHeader, CardBody, Heading, Image, Stack, Divider } from '@chakra-ui/react'`
 
 
 - Destructuring useState and setState objects from the Provider.

 **MealCard.jsx**

`const {meals, setMeals} = useCardContext();`

