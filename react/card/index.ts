/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import type { EventName } from '@lit-labs/react';
import { Card as SpCard } from '@spectrum-web-components/card';

import '@spectrum-web-components/card/sp-card.js';

export const Card = createComponent({
    displayName: 'Card',
    elementClass: SpCard,
    react: React,
    tagName: 'sp-card',
    events: {
        click: 'click' as EventName<Event>,
        change: 'change' as EventName<Event>, // Announces a change in the `selected` property of a card
    },
});

export type CardType = EventTarget & SpCard;
