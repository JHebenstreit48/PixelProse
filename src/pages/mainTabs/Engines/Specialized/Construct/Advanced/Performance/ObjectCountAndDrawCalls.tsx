import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ObjectCountAndDrawCalls = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/Performance/ObjectCountAndDrawCalls';

  return (
    <>
      <PageLayout>
        <PageTitle title="Object Count & Draw Calls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectCountAndDrawCalls;
