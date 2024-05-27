/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { PropertyHintTipInput } from '../../../../state/shared';
import { ControllerServiceApi } from '../../controller-service/controller-service-api/controller-service-api.component';

@Component({
    selector: 'property-hint-tip',
    standalone: true,
    templateUrl: './property-hint-tip.component.html',
    imports: [ControllerServiceApi, NgTemplateOutlet],
    styleUrls: ['./property-hint-tip.component.scss']
})
export class PropertyHintTip {
    @Input() data: PropertyHintTipInput | undefined;
}