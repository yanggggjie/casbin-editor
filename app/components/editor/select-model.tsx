// Copyright 2024 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import { ModelKind, example } from './casbin-mode/example';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectModelProps {
  onChange: (value: string) => void;
}

const SelectModel = (props: SelectModelProps) => {
  return (
    <Select
      defaultValue={'basic'}
      onValueChange={(value) => {
        props.onChange(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your model" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(example).map((n) => {
          return (
            <SelectItem key={n} value={n}>
              {example[n as ModelKind].name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectModel;
