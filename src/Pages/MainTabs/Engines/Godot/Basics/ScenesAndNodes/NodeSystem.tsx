import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NodeSystem = () => {
  const markdownFilePath = 'Engines/Godot/Basics/ScenesAndNodes/NodeSystem';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Node System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodeSystem;
