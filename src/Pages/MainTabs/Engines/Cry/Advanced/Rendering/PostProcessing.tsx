import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostProcessing = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Rendering/PostProcessing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Post-Processing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostProcessing;
