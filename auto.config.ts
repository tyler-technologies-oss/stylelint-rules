import { AutoRc } from 'auto';
import { INpmConfig } from '@auto-it/npm';

const npmOptions: INpmConfig = {
  setRcToken: false
};

export default function rc(): AutoRc {
  return {
    versionBranches: true,
    prereleaseBranches: ['dev', 'beta', 'rc', 'next'],
    author: 'GitHub Actions <41898282+github-actions[bot]@users.noreply.github.com>',
    canary: { target: 'pr-body' },
    plugins: [
      ['npm', npmOptions],
      'conventional-commits',
      'released',
      'first-time-contributor',
      'pr-body-labels'
    ]
  };
}
