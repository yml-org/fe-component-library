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
import { Dialog as SpDialog } from '@spectrum-web-components/dialog';
import { DialogWrapper as SpDialogWrapper } from '@spectrum-web-components/dialog';

export const Dialog = createComponent({
    displayName: 'Dialog',
    elementClass: SpDialog,
    react: React,
    tagName: 'sp-dialog',
    events: {
        close: 'close' as EventName<Event>, // Announces that the dialog has been closed.
    },
});
export const DialogWrapper = createComponent({
    displayName: 'DialogWrapper',
    elementClass: SpDialogWrapper,
    react: React,
    tagName: 'sp-dialog-wrapper',
    events: {
        close: 'close' as EventName<Event>, // Announces that the dialog has been closed.
        secondary: 'secondary' as EventName<Event>, // Announces that the "secondary" button has been clicked.
        cancel: 'cancel' as EventName<Event>, // Announces that the "cancel" button has been clicked.
        confirm: 'confirm' as EventName<Event>, // Announces that the "confirm" button has been clicked.
    },
});
export type DialogType = EventTarget & SpDialog;
export type DialogWrapperType = EventTarget & SpDialogWrapper;
