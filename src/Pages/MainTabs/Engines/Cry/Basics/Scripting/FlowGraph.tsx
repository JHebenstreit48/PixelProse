import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FlowGraph = () => {
  const markdownFilePath = 'Engines/Cry/Basics/Scripting/FlowGraph';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Flow Graph (Visual)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlowGraph;
