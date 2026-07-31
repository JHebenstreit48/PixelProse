import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FlowGraph = () => {
  const markdownFilePath = 'Engines/Cry/Basics/Scripting/FlowGraph';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flow Graph (Visual)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlowGraph;
