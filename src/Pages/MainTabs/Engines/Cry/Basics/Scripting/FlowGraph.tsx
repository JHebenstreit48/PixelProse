import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
