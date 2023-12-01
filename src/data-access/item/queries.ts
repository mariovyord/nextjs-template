import "server-only";

import { db } from "@/db";
import { CreateItemDto, ItemDto, mapToDto } from "./types";

export async function getItems(number = 20): Promise<ItemDto[]> {
  const items = await db.item.findMany({
    take: number,
  });

  return items.map((x) => mapToDto(x));
}

export async function getItemById(itemId: string): Promise<ItemDto | null> {
  const foundItem = await db.item.findFirst({
    where: { id: itemId },
  });

  if (!foundItem) return null;

  return mapToDto(foundItem);
}

export async function createItem(item: CreateItemDto): Promise<ItemDto> {
  const createdItem = await db.item.create({
    data: item,
  });

  return mapToDto(createdItem);
}

export async function deleteItemById(itemId: string): Promise<void> {
  await db.item.delete({
    where: { id: itemId },
  });
}

export async function updateItem(item: ItemDto): Promise<ItemDto> {
  const updatedItem = await db.item.update({
    where: { id: item.id },
    data: item,
  });

  return mapToDto(updatedItem);
}
