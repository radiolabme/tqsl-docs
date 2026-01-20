---
title: Missing Resources
description: Tracking of dead and unavailable external links
---

This document tracks the status of external resources referenced in the original Trusted QSL documentation from 2003. Over two decades, many links have become inaccessible due to website changes, service discontinuations, or organizational restructuring.

## Link Status Summary

| Category             | Dead Links | Active Links | Archived |
| -------------------- | ---------- | ------------ | -------- |
| Government/Standards | 3          | 2            | 0        |
| RSA Security         | 3          | 0            | 0        |
| Amateur Radio        | 4          | 2            | 0        |
| Community            | 2          | 1            | 0        |
| Cryptography         | 4          | 1            | 1        |
| **Total**            | **16**     | **6**        | **1**    |

## Dead Links

The following resources from the original 2003 website are no longer accessible. Most return 404 errors, timeouts, or have been reorganized without redirects.

### Government and Standards Organizations

| Original URL                                                                              | Status   | Notes                             |
| ----------------------------------------------------------------------------------------- | -------- | --------------------------------- |
| [csrc.nist.gov/cryptval/dss.htm](http://csrc.nist.gov/cryptval/dss.htm)                   | 404      | NIST DSS validation information   |
| [w3.access.gpo.gov/bis/ear/ear_data.html](http://w3.access.gpo.gov/bis/ear/ear_data.html) | Timeout  | Export administration regulations |
| [www.treas.gov/offices/enforcement/ofac/](http://www.treas.gov/offices/enforcement/ofac/) | Redirect | Treasury OFAC moved to new domain |

### RSA Security Resources

RSA Security (now part of Dell Technologies) reorganized their documentation extensively. All RSA Labs links from 2003 are now broken.

| Original URL                                                                                                                    | Status  | Notes                       |
| ------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------- |
| [rsasecurity.com/rsalabs/challenges/factoring/rsa155.html](http://www.rsasecurity.com/rsalabs/challenges/factoring/rsa155.html) | Timeout | RSA-155 factoring challenge |
| [rsasecurity.com/rsalabs/faq/3-4-1.html](http://www.rsasecurity.com/rsalabs/faq/3-4-1.html)                                     | Timeout | DSA FAQ section             |
| [rsasecurity.com/rsalabs/rsa_algorithm/index.html](http://www.rsasecurity.com/rsalabs/rsa_algorithm/index.html)                 | Timeout | RSA algorithm documentation |

### Amateur Radio Community

| Original URL                                                                                  | Status  | Notes                                  |
| --------------------------------------------------------------------------------------------- | ------- | -------------------------------------- |
| [sff.net/people/N7DR/radio/QSLformat.pdf](http://www.sff.net/people/N7DR/radio/QSLformat.pdf) | 404     | N7DR's QSL format article              |
| [sff.net/people/N7DR/radio/QSLpolicy.pdf](http://www.sff.net/people/N7DR/radio/QSLpolicy.pdf) | 404     | N7DR's QSL policy recommendations      |
| [zs6ez.za.org/articles/e-qsl.htm](http://zs6ez.za.org/articles/e-qsl.htm)                     | Timeout | ZS6EZ eQSL article                     |
| [trustedqsl.sourceforge.net/lotwspec.pdf](http://trustedqsl.sourceforge.net/lotwspec.pdf)     | 404     | Original LoTW spec (preserved locally) |

### Discussion Forums

Yahoo Groups, once a major platform for amateur radio discussions, shut down in December 2020.

| Original URL                                                                    | Status  | Notes                     |
| ------------------------------------------------------------------------------- | ------- | ------------------------- |
| [groups.yahoo.com/group/TrustedQSL/](http://groups.yahoo.com/group/TrustedQSL/) | Defunct | Yahoo Groups discontinued |
| [groups.yahoo.com/group/TrustedQSL](http://groups.yahoo.com/group/TrustedQSL)   | Defunct | All content lost          |

### Cryptography and Security

| Original URL                                                                  | Status  | Notes                       |
| ----------------------------------------------------------------------------- | ------- | --------------------------- |
| [world.std.com/~franl/crypto/](http://world.std.com/~franl/crypto/)           | 404     | Available via Web Archive   |
| [epic.org/crypto/dss/](http://www.epic.org/crypto/dss/)                       | 403     | EPIC DSS policy information |
| [www2.epic.org/reports/crypto2000/](http://www2.epic.org/reports/crypto2000/) | 403     | EPIC cryptography report    |
| [patft.uspto.gov/...](http://patft.uspto.gov/)                                | Timeout | USPTO patent search         |

### SourceForge

| Original URL                                                                                                          | Status | Notes                     |
| --------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------- |
| [sourceforge.net/projects/showfiles.php?group_id=21495](http://sourceforge.net/projects/showfiles.php?group_id=21495) | 404    | Old file browser replaced |

## Available Alternatives

### Archived Content

Some content can be accessed through the Internet Archive's Wayback Machine:

| Resource                 | Archive URL                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Franl's Crypto Resources | [web.archive.org/web/20080527190858/...](http://web.archive.org/web/20080527190858/http://world.std.com/~franl/crypto/) |

### Local Copies

Specifications and documents that were previously hosted externally are now preserved in this repository:

| Document                | Location                              |
| ----------------------- | ------------------------------------- |
| ARRL LoTW Specification | `contrib/tQSL-documents/lotwspec.pdf` |
| GAbbI Specification     | `contrib/Trusted_GAbbI.pdf`           |

## Active Links

These resources remain accessible as of January 2026:

| URL                                                                                                                  | Description                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [adif.org](http://www.adif.org)                                                                                      | ADIF (Amateur Data Interchange Format) specification |
| [arrl.org/lotw/](http://www.arrl.org/lotw/)                                                                          | ARRL Logbook of the World service                    |
| [openssl.org](http://www.openssl.org/)                                                                               | OpenSSL cryptographic library project                |
| [ietf.org/rfc/rfc3280.txt](http://www.ietf.org/rfc/rfc3280.txt)                                                      | X.509 PKI Certificate standard (RFC 3280)            |
| [w3.org/TR/2002/REC-xmldsig-core-20020212/](http://www.w3.org/TR/2002/REC-xmldsig-core-20020212/)                    | XML Digital Signature specification                  |
| [sourceforge.net/projects/trustedqsl/](https://sourceforge.net/projects/trustedqsl/)                                 | TrustedQSL development project                       |
| [eqsl.cc](http://www.eqsl.cc)                                                                                        | eQSL.cc electronic QSL service                       |
| [comparitech.com/.../cryptography-guide/](https://www.comparitech.com/blog/information-security/cryptography-guide/) | Modern cryptography overview                         |

## Notes on Link Preservation

The internet's ephemeral nature means that documentation relying on external links requires ongoing maintenance. This archive includes local copies of critical specifications to ensure long-term availability.

The content presented in this documentation was largely recovered from two sources:

1. **Internet Archive's Wayback Machine** - Historical snapshots of the original Trusted QSL website
2. **Rick Murphy's Reconstruction** - The preserved Trusted QSL site files maintained by Rick Murphy

Both the original archived HTML files and the reconstructed site content are preserved in the `/contrib` directory of this repository. These source materials were converted to modern Markdown format for this documentation site, ensuring long-term accessibility and maintainability while preserving the original technical content.

For academic or research purposes requiring access to the original HTML or additional historical resources, the Internet Archive's Wayback Machine remains the best resource for accessing historical web content.

Link verification last performed: January 19, 2026
