import contract from 'neat-contract';

function pkgEntry(pkg) {
  contract('pkg', Object, pkg);
  return (pkg['jsnext:main'] || pkg.main || 'index.js');
}

export default pkgEntry;
