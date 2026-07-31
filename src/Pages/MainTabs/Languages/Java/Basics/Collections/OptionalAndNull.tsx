import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const OptionalAndNull = () => {
  const markdownFilePath = 'Languages/Java/Basics/Collections/OptionalAndNull';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optional & Null" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptionalAndNull;
