import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NodeSystem = () => {
  const markdownFilePath = 'Engines/Godot/Basics/ScenesAndNodes/NodeSystem';

  return (
    <>
      <PageLayout>
        <PageTitle title="Node System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodeSystem;
