import { Clock, Filter, Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CanteenPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Canteen</h2>
            <p className="text-muted-foreground">Order food from campus canteens</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search for food items..." className="w-full pl-8" />
          </div>
        </div>

        <Tabs defaultValue="main" className="space-y-4">
          <TabsList>
            <TabsTrigger value="main">Main Canteen</TabsTrigger>
            <TabsTrigger value="cafe">Cafe Corner</TabsTrigger>
            <TabsTrigger value="juice">Juice Bar</TabsTrigger>
          </TabsList>
          <TabsContent value="main" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Main Canteen</h3>
                <p className="text-sm text-muted-foreground">Open now • Closes at 8:00 PM</p>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>5 min wait</span>
              </Badge>
            </div>

            <Separator />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { name: "Veggie Burger", price: 5.99, available: true },
                { name: "Chicken Sandwich", price: 6.99, available: true },
                { name: "Pasta Alfredo", price: 7.99, available: true },
                { name: "Caesar Salad", price: 4.99, available: true },
                { name: "Pizza Slice", price: 3.99, available: false },
                { name: "Fries", price: 2.99, available: true },
                { name: "Soda", price: 1.99, available: true },
                { name: "Ice Cream", price: 2.99, available: true },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="p-4">
                    <div className="aspect-square w-full overflow-hidden rounded-md bg-muted">
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=${item.name}`}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>₹{item.price.toFixed(2)}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" disabled={!item.available}>
                      {item.available ? "Add to Order" : "Unavailable"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cafe" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Cafe Corner</h3>
                <p className="text-sm text-muted-foreground">Open now • Closes at 6:00 PM</p>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>2 min wait</span>
              </Badge>
            </div>

            <Separator />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { name: "Cappuccino", price: 3.99, available: true },
                { name: "Latte", price: 4.49, available: true },
                { name: "Espresso", price: 2.99, available: true },
                { name: "Croissant", price: 2.49, available: true },
                { name: "Muffin", price: 2.99, available: true },
                { name: "Bagel", price: 3.49, available: false },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="p-4">
                    <div className="aspect-square w-full overflow-hidden rounded-md bg-muted">
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=${item.name}`}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>₹{item.price.toFixed(2)}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" disabled={!item.available}>
                      {item.available ? "Add to Order" : "Unavailable"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="juice" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Juice Bar</h3>
                <p className="text-sm text-muted-foreground">Open now • Closes at 7:00 PM</p>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>3 min wait</span>
              </Badge>
            </div>

            <Separator />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { name: "Orange Juice", price: 3.99, available: true },
                { name: "Apple Juice", price: 3.99, available: true },
                { name: "Mango Smoothie", price: 4.99, available: true },
                { name: "Berry Blast", price: 4.99, available: true },
                { name: "Green Detox", price: 5.49, available: false },
                { name: "Protein Shake", price: 5.99, available: true },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="p-4">
                    <div className="aspect-square w-full overflow-hidden rounded-md bg-muted">
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=${item.name}`}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>₹{item.price.toFixed(2)}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" disabled={!item.available}>
                      {item.available ? "Add to Order" : "Unavailable"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
