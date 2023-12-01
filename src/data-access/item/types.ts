import type { Item } from "@prisma/client";

export type ItemDto = {
  id: string;
  name: string;
  quantity: number;
  userId: string;
};

export type CreateItemDto = Pick<Item, "name" | "userId" | "quantity">;

export function mapToDto(item: Item): ItemDto {
  return {
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    userId: item.userId,
  };
}
