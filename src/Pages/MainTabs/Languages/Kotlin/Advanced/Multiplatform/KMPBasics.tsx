import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KMPBasics = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Multiplatform/KMPBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="KMP Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KMPBasics;
