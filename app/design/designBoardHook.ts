"use client";

import { designBoard } from "@/constants/design-data";

import { DocGroup } from "@/types/board";

export const useDesignBoard = (): DocGroup[] => designBoard;