import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Network, Building2, Users, Lightbulb, GraduationCap, Microscope, X } from 'lucide-react';
import './EcosystemMap.css';

// --- CUSTOM NODE COMPONENTS ---
const CenterNode = ({ data }) => {
  return (
    <div className="custom-node center-node elegant-border">
      <Handle type="source" position={Position.Top} id="t" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} id="r" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} id="b" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Left} id="l" style={{ opacity: 0 }} />

      <div className="node-icon-wrapper center-icon">
        <Network size={32} color="#fff" />
      </div>
      <div className="node-label">{data.label}</div>
    </div>
  );
};

const SatelliteNode = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className={`custom-node satellite-node elegant-border ${data.colorClass}`}>
      <Handle type="target" position={data.handlePos} style={{ opacity: 0 }} />
      <div className="node-icon-wrapper">
        <Icon size={24} />
      </div>
      <div className="node-label">{data.label}</div>
    </div>
  );
};

const nodeTypes = {
  center: CenterNode,
  satellite: SatelliteNode,
};

// --- INITIAL DATA ---
const initialNodes = [
  {
    id: 'center',
    type: 'center',
    position: { x: 450, y: 250 },
    data: { label: 'Dr. Bhavna Ambudkar' }
  },
  {
    id: 'incubators',
    type: 'satellite',
    position: { x: 450, y: 10 },
    data: { label: 'Incubators', icon: Lightbulb, colorClass: 'node-sage', handlePos: Position.Bottom, details: 'Advising deep-tech and academic incubators to support student and faculty-led ventures.' }
  },
  {
    id: 'startups',
    type: 'satellite',
    position: { x: 750, y: 120 },
    data: { label: 'Startups', icon: Network, colorClass: 'node-blue', handlePos: Position.Left, details: 'Mentored over 30+ startups, guiding them through ideation, product-market fit, and scaling.' }
  },
  {
    id: 'industry',
    type: 'satellite',
    position: { x: 750, y: 380 },
    data: { label: 'Industry', icon: Building2, colorClass: 'node-navy', handlePos: Position.Left, details: 'Driving 15+ corporate partnerships to bridge the gap between academic research and industry application.' }
  },
  {
    id: 'students',
    type: 'satellite',
    position: { x: 150, y: 380 },
    data: { label: 'Students', icon: GraduationCap, colorClass: 'node-sage', handlePos: Position.Right, details: 'Empowered over 5000+ students to embrace an entrepreneurial mindset through hands-on innovation programs.' }
  },
  {
    id: 'research',
    type: 'satellite',
    position: { x: 150, y: 120 },
    data: { label: 'Research Labs', icon: Microscope, colorClass: 'node-blue', handlePos: Position.Right, details: 'Collaborating on 21+ publications and patents focusing on networks, innovation, and educational technology.' }
  },
  {
    id: 'epic',
    type: 'satellite',
    position: { x: 450, y: 490 },
    data: { label: 'Innovation Council / EPIC', icon: Lightbulb, colorClass: 'node-navy', handlePos: Position.Top, details: 'Leading institutional innovation councils to foster a culture of continuous creation and entrepreneurship.' }
  },
];

const initialEdges = [
  { id: 'e-incubators', source: 'center', target: 'incubators', sourceHandle: 't', animated: true, style: { stroke: 'var(--accent-sage)', strokeWidth: 2 } },
  { id: 'e-startups', source: 'center', target: 'startups', sourceHandle: 'r', animated: true, style: { stroke: 'var(--accent-blue)', strokeWidth: 2 } },
  { id: 'e-industry', source: 'center', target: 'industry', sourceHandle: 'r', animated: true, style: { stroke: 'var(--bg-navy)', strokeWidth: 2 } },
  { id: 'e-students', source: 'center', target: 'students', sourceHandle: 'l', animated: true, style: { stroke: 'var(--accent-sage)', strokeWidth: 2 } },
  { id: 'e-research', source: 'center', target: 'research', sourceHandle: 'l', animated: true, style: { stroke: 'var(--accent-blue)', strokeWidth: 2 } },
  { id: 'e-epic', source: 'center', target: 'epic', sourceHandle: 'b', animated: true, style: { stroke: 'var(--accent-cyan)', strokeWidth: 2 } },
];

const EcosystemMap = () => {
  const [activeNode, setActiveNode] = useState(null);

  const onNodeClick = useCallback((event, node) => {
    if (node.type === 'satellite') {
      setActiveNode(node.data);
    }
  }, []);

  return (
    <section id="ecosystem" className="ecosystem">
      <div className="container">
        <div className="ecosystem-header reveal">
          <span className="subtitle">Network</span>
          <h2 className="section-title text-left">
            Innovation <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="ecosystem-subtitle">
            Explore the dynamic network of collaborations driving the future of design leadership.
          </p>
        </div>

        <div className="map-wrapper elegant-border soft-shadow reveal reveal-delay-1">
          <div className="react-flow-container">
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              nodeTypes={nodeTypes}
              onNodeClick={onNodeClick}
              fitView
              minZoom={0.5}
              maxZoom={1.5}
              panOnDrag={false}
              zoomOnScroll={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background color="var(--bg-navy)" gap={24} size={1} opacity={0.05} />
            </ReactFlow>
          </div>

          {/* Side Panel for Details */}
          <div className={`details-panel ${activeNode ? 'open' : ''}`}>
            {activeNode && (
              <>
                <button className="close-details-btn" onClick={() => setActiveNode(null)}>
                  <X size={20} />
                </button>
                <div className="details-content">
                  <div className={`details-icon ${activeNode.colorClass}`}>
                    <activeNode.icon size={32} />
                  </div>
                  <h3 className="details-title">{activeNode.label}</h3>
                  <div className="details-divider"></div>
                  <p className="details-text">{activeNode.details}</p>
                </div>
              </>
            )}
            {!activeNode && (
              <div className="empty-state">
                <p>Click on a satellite node to explore the relationship.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemMap;
