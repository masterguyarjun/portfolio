# Security Policy

## Supported Versions

This is a personal portfolio website with static export. Security updates are applied to the `main` branch as needed.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio website, please report it responsibly:

### 📧 Email (Preferred)
**arjun@masterguyarjun.online**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### 🔐 PGP Encryption
For sensitive reports, use my PGP key:
```
-----BEGIN PGP PUBLIC KEY BLOCK-----
[Key available at https://masterguyarjun.online/pgp-key.asc]
-----END PGP PUBLIC KEY BLOCK-----
```

### 🐛 Bug Bounty Platforms
I also accept reports via:
- **HackerOne:** [@masterguyarjun](https://hackerone.com/masterguyarjun)
- **Bugcrowd:** [@masterguyarjun](https://bugcrowd.com/masterguyarjun)

---

## Response Timeline

| Severity | Acknowledgment | Initial Assessment | Fix Target |
|----------|----------------|-------------------|------------|
| Critical | < 24 hours     | < 48 hours        | < 7 days   |
| High     | < 48 hours     | < 72 hours        | < 14 days  |
| Medium   | < 72 hours     | < 7 days          | < 30 days  |
| Low      | < 7 days       | < 14 days         | Next release |

---

## Security Architecture

### Static Export Benefits
- **No server-side attack surface:** No database, no API routes, no server runtime
- **No secrets in build:** Environment variables only for build-time config
- **Immutable deployments:** Each deploy is a complete, versioned snapshot

### Content Security Policy
Configured via `next.config.js` and `<meta http-equiv="Content-Security-Policy">`:
```http
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval'; # Next.js requires inline scripts
style-src 'self' 'unsafe-inline'; # Tailwind uses inline styles
img-src 'self' data: https:;
font-src 'self' data:;
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```

### External Link Safety
All external links use `rel="noopener noreferrer"` via the `ExternalLink` component to prevent:
- `window.opener` access (tabnabbing)
- Referrer leakage

### Input Validation
- Contact form: Client-side validation with accessible error messages
- No server-side processing (static export)
- Form submissions would integrate with Formspree/Netlify Forms (not implemented in demo)

### Dependency Security
```bash
# Audit dependencies
npm audit

# Update dependencies
npm update

# Check for vulnerabilities in CI
npm audit --audit-level=high
```

---

## Secure Development Practices

### Code Review Checklist
- [ ] No hardcoded secrets, API keys, or tokens
- [ ] All external links use `ExternalLink` component
- [ ] No `dangerouslySetInnerHTML` with user input
- [ ] CSP headers not weakened without justification
- [ ] Dependencies updated regularly
- [ ] Accessibility maintained (WCAG 2.2 AA)

### Build Verification
```bash
# Full build with type-checking and linting
npm run build && npm run lint && npm run type-check
```

---

## Threat Model

### Assets
- Personal/professional reputation
- Contact form submissions (if enabled)
- Analytics data (if enabled)
- Visitor privacy

### Threats
| Threat | Likelihood | Impact | Mitigation |
|--------|------------|--------|------------|
| XSS via content injection | Low | Medium | Static content, no user input rendering |
| Tabnabbing via external links | Medium | Low | `noopener noreferrer` on all external links |
| Dependency vulnerabilities | Medium | Medium | Regular `npm audit`, automated dependabot |
| Content spoofing | Low | Low | Static export, signed deployments |
| Information disclosure | Low | Low | No secrets in repo, minimal metadata |

---

## Incident Response

1. **Detect:** Monitoring via GitHub security advisories, dependabot alerts
2. **Assess:** Determine severity using CVSS 4.0
3. **Contain:** Revert deployment if critical vulnerability in production
4. **Remediate:** Apply fix, test, deploy
5. **Communicate:** Notify affected parties if data exposed
6. **Learn:** Post-incident review, update threat model

---

## Security Headers Verification

After deployment, verify headers at:
- **Security Headers:** https://securityheaders.com/?q=https%3A%2F%2Fmasterguyarjun.online
- **Mozilla Observatory:** https://observatory.mozilla.org/analyze/masterguyarjun.online
- **CSP Evaluator:** https://csp-evaluator.withgoogle.com/

---

## Contact

**Security Contact:** Mallikharjun Swamy Sudnagunta (MasterGuyArjun)  
**Email:** arjun@masterguyarjun.online  
**PGP:** Available at https://masterguyarjun.online/pgp-key.asc

---

*This security policy follows responsible disclosure principles. Thank you for helping keep this portfolio secure.*
