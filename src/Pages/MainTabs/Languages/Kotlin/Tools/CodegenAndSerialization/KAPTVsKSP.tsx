import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KAPTVsKSP = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/CodegenAndSerialization/KAPTVsKSP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="KAPT vs KSP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KAPTVsKSP;
