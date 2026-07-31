import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
