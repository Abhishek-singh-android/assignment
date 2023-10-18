// import { BellIcon, ChartBarIcon, ExternalLinkIcon, MailIcon, StatusOnlineIcon } from "@heroicons/react/outline";
import { HomeIcon, SearchIcon,ChartBarIcon,BellIcon,ExternalLinkIcon,MailIcon,StatusOnlineIcon } from "@heroicons/react/solid";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Flex,
  TextInput,
} from "@tremor/react";
import { SelectComponent } from "./SelectComponent";

const data = [
  {
    name: "Abstract 3D",
    stock: "32 in stock",
    Avatar:<HomeIcon width={40}/>,
    price: "$ 45.99",
    status: "active",
  },
  {
    name: "Iphone 9",
    stock: "45 in stock",
    Avatar:<SearchIcon width={40}/>,
    price: "$ 45.99",
    status: "active",
  },
  {
    name: "Smart Watch",
    stock: "24 in stock",
    Avatar:<BellIcon width={40}/>,
    price: "$ 20",
    status: "active",
  },
  {
    name: "Boat Headphone",
    stock: "20 in stock",
    Avatar:<ChartBarIcon width={40}/>,
    price: "$ 29.66",
    status: "active",
  },

];

const TableComponent = () => {

  return (
    <Card className="mt-4 dark:bg-tremor-background">

    <div className="sm:flex justify-between items-center">
    <Title>Product Sell</Title>
    <div className="py-2">
    <div className="sm:flex justify-between items-center">
        <TextInput className="dark:bg-tremor-background mr-4 mb-2" icon={SearchIcon} placeholder="Search..." />
        <SelectComponent/>
        </div>

      </div>
    </div>


    <Table className="mt-5 dark:bg-tremor-background">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Position</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>

          <div className="flex justify-start items-center">
          <TableCell>
          {item.Avatar}
          </TableCell>
          {item.name}
          </div>
           

            <TableCell>
              <Text>{item.stock}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.price}</Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
  
};

export default TableComponent;
