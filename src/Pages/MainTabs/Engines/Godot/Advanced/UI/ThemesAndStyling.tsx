import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThemesAndStyling = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/UI/ThemesAndStyling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Themes & Styling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThemesAndStyling;
