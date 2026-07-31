import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
