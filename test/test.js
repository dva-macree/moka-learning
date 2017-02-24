import assert from 'assert'
import path from 'path';
import fs from 'fs'

import generate from '../lib/generate';

describe('generate_test',()=>{
    it('生成静态文件',done => {
        generate({debug: true, dir: './test'});
    })
})