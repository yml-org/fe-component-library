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
import { Button as SpButton } from '@spectrum-web-components/button';
import { ClearButton as SpClearButton } from '@spectrum-web-components/button';
import { CloseButton as SpCloseButton } from '@spectrum-web-components/button';

import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/button/sp-close-button.js';

export const Button = createComponent({
    displayName: 'Button',
    elementClass: SpButton,
    react: React,
    tagName: 'sp-button',
    events: {},
});
export const ClearButton = createComponent({
    displayName: 'ClearButton',
    elementClass: SpClearButton,
    react: React,
    tagName: 'sp-clear-button',
    events: {},
});
export const CloseButton = createComponent({
    displayName: 'CloseButton',
    elementClass: SpCloseButton,
    react: React,
    tagName: 'sp-close-button',
    events: {},
});

export type ButtonType = EventTarget & SpButton;
export type ClearButtonType = EventTarget & SpClearButton;
export type CloseButtonType = EventTarget & SpCloseButton;
