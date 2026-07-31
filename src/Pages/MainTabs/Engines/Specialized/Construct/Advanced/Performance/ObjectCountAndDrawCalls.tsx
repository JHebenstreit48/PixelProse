import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
