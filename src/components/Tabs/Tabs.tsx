'use client';

import * as React from 'react';
import { Tabs as ChakraTabs } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface TabsProps extends ChakraTabs.RootProps {
  isLinks: boolean;
  variant: 'line' | 'subtle' | 'enclosed' | 'outline' | 'plain';
  items: Array<{
    name: string;
    label: React.ReactNode;
    content: React.ReactNode;
  }>;
}

export const Tabs: React.FC<TabsProps> = ({ variant, items }) => {
  const navigate = useNavigate();
  return (
    <TabsRoot
      variant={variant}
      defaultValue={items[0]?.name}
      fitted
      navigate={({ value }) => navigate(`/${value}`)}
    >
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.name} value={item.name}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.name} value={item.name}>
          {item.content}
        </TabsContent>
      ))}
    </TabsRoot>
  );
};

export const TabsRoot = ChakraTabs.Root;
export const TabsList = ChakraTabs.List;
export const TabsTrigger = ChakraTabs.Trigger;
export const TabsContent = ChakraTabs.Content;
