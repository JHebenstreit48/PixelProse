import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
