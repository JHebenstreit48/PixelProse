import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
