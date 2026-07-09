import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IteratorsAndLoops = () => {
  const markdownFilePath = 'Languages/Lua/Basics/FlowAndFunctions/IteratorsAndLoops';

  return (
    <>
      <PageLayout>
        <PageTitle title="Iterators & Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IteratorsAndLoops;
