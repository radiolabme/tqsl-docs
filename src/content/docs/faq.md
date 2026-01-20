---
title: Frequently Asked Questions
description: Common questions about Trusted QSL and digital signatures
---

## About Trusted QSL

**Q:** What is the difference between E-QSLs and tQSLs?

**A:** A tQSL is just a special form of an E-QSL, one signed by its creator with a public key digital signature.

**Q:** What is wrong with [http://www.eqsl.cc](http://www.eqsl.cc)?

**A:** Nothing at all. The concept of a tQSL does not exclude the participation by a logbook server such as eQSL.cc. A tQSL adds a third party authentication protocol that replaces the central server as the trusted authenticator.

## Digital Signatures

**Q:** Is a digital signature really that difficult to forge, crack or break?

**A:** Yes, it's that difficult. The only attack against a digital signature that is known to be successful requires factoring a very large number. Factoring a large number is a time consuming problem but, given enough computing power, it's not impossible. Factoring 100-digit numbers is easy with today's hardware and algorithms. The [RSA-155 challenge](http://www.rsasecurity.com/rsalabs/challenges/factoring/rsa155.html) to factor a 155-digit (512 bit) number required 37.5 CPU-years distributed across 292 computers and ultimately a supercomputer to solve. Factoring numbers of more than 200 digits is not currently feasible. The ANSI and NIST standards for digital signatures require a minimum of a 303-digit (1024-bit) number.

**Q:** Will a tQSL signed today continue to be trustworthy as bigger and faster computers become available?

**A:** Extrapolations have been made based on Moore's Law (computing power doubles every 18 months) and on the historical progression of the largest number factored. Both approaches give similar answers when applied to a digital signature created with today's standard commercial key length of 303-digits (1024-bits): forging such a signature will not be feasible for at least several decades to come. No one's crystal ball is perfect. A mathematical breakthrough that results in the discovery of a more efficient method for factoring large numbers clearly would alter those predictions.

## Keys and Certificates

**Q:** What is a private key?

**A:** A private key is just a very large number. In itself, it has no special meaning.

**Q:** What do I sign with my private key?

**A:** You sign tQSLs. You can send those tQSLs directly to your peers, submit them to an awards sponsor and deposit them in a central logbook server.

**Q:** What is an identity certificate (cert)?

**A:** A cert contains the user's public key, call sign and other information, plus the signature of a Certification Authority (CA) endorsing the information contained in the cert.

**Q:** What can I sign with my cert?

**A:** Nothing. Certs are only used for authenticating signatures. You use your private key to sign tQSLs.

**Q:** What is a Certification Authority (CA)?

**A:** A CA takes the user's information and public key, verifies the information and endorses the information and public key by signing the user's cert with the CA's private key.
