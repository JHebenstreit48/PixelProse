import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ControlNodes = () => {
  const markdownFilePath = 'Engines/Godot/Basics/UIBasics/ControlNodes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Control Nodes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlNodes;
