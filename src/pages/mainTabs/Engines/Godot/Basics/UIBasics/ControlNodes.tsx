import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
