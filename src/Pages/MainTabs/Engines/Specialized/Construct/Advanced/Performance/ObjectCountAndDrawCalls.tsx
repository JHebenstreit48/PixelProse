import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ObjectCountAndDrawCalls = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/Performance/ObjectCountAndDrawCalls';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Object Count & Draw Calls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectCountAndDrawCalls;
